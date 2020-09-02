import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const URL_REG = /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  icon: 'sync_alt' | 'arrow_back' | 'arrow_forward' = 'sync_alt';
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
      this.icon = 'sync_alt';
    } else if (!match[5] || match[5] !== 's.don.red') {
      this.icon = 'arrow_forward';
    } else {
      this.icon = 'arrow_back';
    }
  }

}
