import { LoggerService } from './logger.interface';

export class ConsoleLoggerService implements LoggerService {
  log(message: string) {
    console.log('[Console]', message);
  }
}
