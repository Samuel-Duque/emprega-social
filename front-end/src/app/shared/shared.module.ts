import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    SelectComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote' ],

          // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          // [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': [false] }],  // custom dropdown
          // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          // [{ 'font': [] }],
          // [{ 'align': [] }],

          // ['clean'],                                         // remove formatting button

          // ['link', 'i,mage', 'video']
        ],
      }
    }),
  ],
  exports: [
    QuillModule,
    SelectComponent,
    FooterComponent
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
})
export class SharedModule { }
