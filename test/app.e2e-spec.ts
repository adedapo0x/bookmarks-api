import {Test} from "@nestjs/testing"
import { AppModule } from "../src/app.module"
import { INestApplication, ValidationPipe } from "@nestjs/common"

describe('app E2E', () => {
  let app: INestApplication
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true
      }));
    await app.init();
  })

  afterAll(() => {
    app.close;
  })
  it.todo("check if e run")
  it.todo("heyyyy")
})
