import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, delay, finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';

const URL_REG = /^(http[s]?):\/\/(.*)$/;
const HOST_REG = /mock.don.red\/tinyurl\//;

function isValidURL(url: string): boolean {
  return !!url.match(URL_REG);
}

function isLongURL(url: string): boolean {
  const match = url.match(URL_REG);
  return !match[2] || !match[2].match(HOST_REG)
}

function isShortURL(url: string): boolean {
  return isValidURL(url) && !isLongURL(url);
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  icon: 'help_outline' | 'link' | 'link_off' = 'help_outline';
  tip: 'Enter your link to continue' | 'Generate short link' | 'Restore original links' = 'Enter your link to continue';
  button: 'Invalid' | 'Shorten' | 'Restore' = 'Shorten';
  loading: boolean = false;
  form: FormGroup;

  constructor(
    private api: ApiService,
    private bar: MatSnackBar
  ) {
    this.form = new FormGroup({
      url: new FormControl(
        undefined,
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(4096),
          // url pattern
          Validators.pattern(URL_REG)
        ]
      )
    });
  }

  ngOnInit() { }

  onInput() {
    const url = this.form.get('url').value;
    if (!isValidURL(url)) {
      // 未输入或输入的不是 URL
      this.icon = 'help_outline';
      this.tip = 'Enter your link to continue';
      this.button = 'Invalid';
    } else if (isLongURL(url)) {
      // 输入的是外链
      this.icon = 'link';
      this.tip = 'Generate short link';
      this.button = 'Shorten';
    } else if (isShortURL(url)) {
      // 输入的是短链
      this.icon = 'link_off';
      this.tip = 'Restore original links';
      this.button = 'Restore';
    }
  }

  submit() {
    this.loading = true;
    this.api
      .transformURL({ url: this.form.get('url').value })
      .pipe(
        delay(1000),
        catchError(error => {
          this.bar.open('URL get failed', 'OK');
          throw error;
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(({ url }: { url: string }) => {
        this.form.setValue({ url });
        this.input.nativeElement.select();
        document.execCommand('copy');
        this.onInput();
        this.bar.open('Link has been copied.', 'OK', { duration: 3000, horizontalPosition: 'end' });
      });
  }

}
