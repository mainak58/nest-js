// <!-- use class -->

// useClass is part of NestJS's custom provider syntax. It's used when you want to override a provider or bind a token to a specific class implementation, especially useful for dependency injection.

// <!-- useValue  -->

// “When someone asks for this token, give them this specific value (object, primitive, function, etc) — no class instantiation.”

// Example:

// app.module.ts
// import { Module } from '@nestjs/common';
// import { config } from './config';

// @Module({
//   providers: [
//     {
//       provide: 'CONFIG',   // 🏷️ token (can be a string, symbol, or class)
//       useValue: config,    // ✅ actual value
//     },
//   ],
// })
// export class AppModule {}

// container.set('CONFIG', {
//   apiKey: '12345-ABCDE',
//   baseUrl: 'https://api.example.com',
// });
