import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const URL_REG = /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  icon: 'help_outline' | 'link' | 'link_off' = 'help_outline';
  tip: 'Enter your link to continue' | 'Generate short link' | 'Restore original links' = 'Enter your link to continue';
  button: 'Invalid' | 'Shorten' | 'Restore' = 'Shorten';
  form: FormGroup;

  constructor() {
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
    const match = this.form.get('url').value.match(URL_REG);
    if (!match) {
      // 未输入或输入的不是 URL
      this.icon = 'help_outline';
      this.tip = 'Enter your link to continue';
      this.button = 'Invalid';
    } else if (!match[5] || !match[5].includes('don.red')) {
      // 输入的是外链
      this.icon = 'link';
      this.tip = 'Generate short link';
      this.button = 'Shorten';
    } else {
      // 输入的是短链
      this.icon = 'link_off';
      this.tip = 'Restore original links';
      this.button = 'Restore';
    }
  }

}
