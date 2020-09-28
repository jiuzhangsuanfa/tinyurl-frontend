import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, delay, finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import { ButtonText, Icon, isInvalidURL, isLongURL, isShortURL, REG_IS_VALID_URL, Tip } from 'src/app/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  icon: Icon = Icon.invalid;
  tip: Tip = Tip.invalid;
  button: ButtonText = ButtonText.shorten;
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
          Validators.pattern(REG_IS_VALID_URL)
        ]
      )
    });
  }

  ngOnInit() { }

  onInput() {
    const url = this.form.get('url').value;
    if (isInvalidURL(url)) {
      // 未输入或输入的不是 URL
      this.icon = Icon.invalid;
      this.tip = Tip.invalid;
      this.button = ButtonText.invalid;
    } else if (isLongURL(url)) {
      // 输入的是外链
      this.icon = Icon.shorten;
      this.tip = Tip.shorten;
      this.button = ButtonText.shorten;
    } else if (isShortURL(url)) {
      // 输入的是短链
      this.icon = Icon.copy;
      this.tip = Tip.copy;
      this.button = ButtonText.copy;
    }
  }

  submit() {
    this.loading = true;
    this.api
      .shorten({ url: this.form.get('url').value })
      .pipe(
        delay(1000),
        catchError(error => {
          this.bar.open('URL shorten failed', 'OK');
          throw error;
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(({ url }: { url: string }) => {
        this.form.setValue({ url });
        this.input.nativeElement.select();
        document.execCommand('copy');
        this.onInput();
        this.button = ButtonText.copied;
        this.bar.open('Link has been copied.', 'OK', { duration: 3000, horizontalPosition: 'end' });
      });
  }

}
