import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  update: Date = new Date();
  paragraphs: string[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http
      .get('https://cdn.jsdelivr.net/gh/devindon/license/THE%20MIT%20LICENSE')
      .pipe(
        catchError(() => of(`样路眼据实系亲系交，整深族儿除制社正，始观求品园吨来。 转至带来收或存与府响，声率民四结业领门争，全造提极米就节北，1民豆出传内就置。
至正八重装传件证用，造来众往史制解，大圆详A种却影。 明次农权话术许县该斗那，须才决特风治结技则，适西V火制速步金园。 五看海术主石定，达火是空利选，资根A枝男呈。 只此标该月会图当争取花，万参条间定改圆地入，利建隶计数承千T才。
看低低什强民及民已们，般拉应许身联米较图，反权F金社持信毛。
年包门解适种教制话再，书织拉引各快打许，果在3月两秀万却。 南布断求目以上系效建今只色共称，能入需土文只运霸二辰真问村。 龙矿府府前总二分做，快分书更反确好响使，线M等拒风吨。
体院新素群金决七，书因它意特件进，流否因建回G。 能就科实建必即该北周然量，问机即体拉J5严男志。 今也王极素如米石建万，受斗出带却以金响，也采屈命的习找全。
转形直八意及满圆品装小，可心因济区酸参务确采，维立杏往一助要经把。 便类业包存存件正很片，新么始空思严好做意，关水V丽器级持V。 元消看型状际组价，北济统到基养，列资6号且次。
程史示个为强对劳，向标维保严信较做，资战开劳新生肃，虚包照辰活支。 小已现带点业根机较越红它，强节例几豆孝芦护种。 张当系发采放才院律，太你打性置月次查，积候9六难连辰。
场听己学还参算出拉，点声也采P深断。 可角收科需了思织么论，必认查今空平广王，拉而孟克油多苏弦。
种府者华象真很两确，四半们省影百市市听，取承各真院直就。`)),
        delay(1000)
      )
      .subscribe((content: string) => this.paragraphs = content.split('\n').filter(v => v));
  }

}
