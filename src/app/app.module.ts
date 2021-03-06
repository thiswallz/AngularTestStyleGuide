import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { BlogModule } from "src/app/blog/blog.module";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    CoreModule,
    HttpModule,
    HttpClientModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
