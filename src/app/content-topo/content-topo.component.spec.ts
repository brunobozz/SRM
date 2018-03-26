import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTopoComponent } from './content-topo.component';

describe('ContentTopoComponent', () => {
  let component: ContentTopoComponent;
  let fixture: ComponentFixture<ContentTopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
