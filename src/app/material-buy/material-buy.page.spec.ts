import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaterialBuyPage } from './material-buy.page';

describe('MaterialBuyPage', () => {
  let component: MaterialBuyPage;
  let fixture: ComponentFixture<MaterialBuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialBuyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialBuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
