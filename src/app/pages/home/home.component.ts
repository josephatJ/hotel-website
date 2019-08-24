import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import * as fromBasicInfo from "../../store/actions/basic-information.actions";
import { getBasicInformation } from "src/app/store/selectors/basic-info.selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  basicInfo$: Observable<any>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new fromBasicInfo.LoadBasicInformationAction());
    this.basicInfo$ = this.store.select(getBasicInformation);
    if (this.basicInfo$) {
      this.basicInfo$.subscribe(basicInformation => {
        // console.log('basicInformation', basicInformation)
      });
    }
  }
}
