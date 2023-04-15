import { Test, TestingModule } from '@nestjs/testing';
import { PdfController } from './pdf.controller';

describe('PdfController', () => {
  let controller: PdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfController],
    }).compile();

    controller = module.get<PdfController>(PdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return a pdf of timesheet', () => {
    expect(controller)
  })
});
