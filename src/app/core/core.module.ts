import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreApiService } from "./core-api.service";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpModule, HttpClientModule],
  providers: [CoreApiService],
  declarations: []
})
export class CoreModule {}
