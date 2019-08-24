import { Component, OnInit } from "@angular/core";
import { PhotosService } from "src/app/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  public photos: any;
  loading: boolean;
  hasError: boolean;
  constructor(private photosService: PhotosService) {
    this.loading = true;
    this.hasError = false;
  }

  ngOnInit() {
    this.photosService.loadAll().subscribe(
      photos => {
        this.photos = photos;
        console.log(photos);
        this.loading = false;
        this.hasError = false;
      },
      error => {
        this.loading = false;
        this.hasError = true;
      }
    );
  }
}
