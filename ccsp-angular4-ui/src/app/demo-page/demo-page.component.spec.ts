import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core'
import { DemoPageComponent } from './demo-page.component';
import { FormsModule }   from '@angular/forms';
import {GlobalService} from '../common/services/global.service';
import {AuthenticationService} from '../common/services/authentication.service';
import { HttpModule } from '@angular/http';
describe('DemoPageComponent', () => {
  let component: DemoPageComponent;
  let fixture: ComponentFixture<DemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPageComponent ],
      schemas : [NO_ERRORS_SCHEMA],
      imports:[FormsModule,HttpModule],
      providers:[GlobalService,AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
