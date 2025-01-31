import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';
import { LoggerService } from 'src/logger/logger.service';
import { LogType } from 'src/logger/types/log-type.type';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(private readonly loggerService: LoggerService) {}

    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<any> | Promise<Observable<any>> {
        const startDate = new Date();

        if (context.getType<GqlContextType>() === 'graphql') {
            const gqlContext = GqlExecutionContext.create(context);
            const info = gqlContext.getInfo();

            const req: Request = gqlContext.getContext().req;
            const res = req.res;

            const ip = req.socket.remoteAddress;
            const userAgent = req.headers['user-agent'];

            const parentType = info.parentType.name;
            const fieldName = info.fieldName;
            const body = info.fieldNodes[0]?.loc?.source?.body;
            const message = `GraphQL - ${parentType} - ${fieldName}`;

            const requestId = uuidv4();
            res.setHeader('requestId', requestId);

            const trace = {
                body,
                handler: gqlContext.getHandler().name,
                args: gqlContext.getArgs(),
            };

            this.loggerService.info(message, {
                requestId,
                version: '1.0.0',
                type: LogType.REQUEST,
                context: trace.handler,
                trace,
                userInfo: {
                    ip,
                    userAgent,
                },
            });

            return next.handle().pipe(
                tap({
                    next: (val: unknown): void => {
                        this.logNext(
                            val,
                            context,
                            trace.handler,
                            requestId,
                            startDate,
                        );
                    },
                }),
            );
        }

        return next.handle();
    }

    private logNext(
        body: unknown,
        context: ExecutionContext,
        handler: string,
        requestId: string,
        startDate: Date,
    ): void {
        if (context.getType() === 'http') {
        }

        if (context.getType<GqlContextType>() === 'graphql') {
            const gqlContext = GqlExecutionContext.create(context);
            const time = new Date().getTime() - startDate.getTime();

            this.loggerService.info(`Response from ${requestId} + ${time}ms`, {
                requestId,
                version: '1.0.0',
                type: LogType.RESPONSE,
                context: `${handler} - response`,
                time,
            });
        }
    }
}
