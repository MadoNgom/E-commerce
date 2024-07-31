import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() detailsClicked: EventEmitter<any> = new EventEmitter();
  @Output() panierClicked: EventEmitter<any> = new EventEmitter();
  
  details(_e:any){
    this.detailsClicked.emit();
  }

  panier(_e:any){
    this.panierClicked.emit()
  }
}
