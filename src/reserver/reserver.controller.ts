import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('test')
export class ReserverController {
  @UseGuards(AuthGuard)
  @Post()
  public makeReserver(@Req() req: Request, @Req() res: Response) {
    return 'dsaas';
  }
}
