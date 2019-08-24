import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slider-gallery",
  templateUrl: "./slider-gallery.component.html",
  styleUrls: ["./slider-gallery.component.css"]
})
export class SliderGalleryComponent implements OnInit {
  @Input() sliderPhotos: any;
  constructor() {}

  ngOnInit() {
    if (this.sliderPhotos) {
      console.log("sliderPhotos", this.sliderPhotos);
    }
  }
}
