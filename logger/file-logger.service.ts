import { LoggerService } from './logger.interface';

export class FileLoggerService implements LoggerService {
  log(message: string) {
    console.log('[File]', message);
  }
}
