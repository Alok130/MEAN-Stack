import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllItemDetailsComponent } from './all-item-details/all-item-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { GetAllItemsComponent } from './get-all-items/get-all-items.component';
import { GetItemComponent } from './get-item/get-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TelegramService } from './Service/telegram.service';

@NgModule({
  declarations: [
    AppComponent,
    AllItemDetailsComponent,
    AddItemComponent,
    GetAllItemsComponent,
    GetItemComponent
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TelegramService],
  bootstrap: [AppComponent]
})
export class AppModule {}
