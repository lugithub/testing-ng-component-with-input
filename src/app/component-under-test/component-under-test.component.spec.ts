import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ComponentUnderTestComponent } from './component-under-test.component';

fdescribe('ComponentUnderTestComponent', () => {
  @Component({
    selector: `app-host-component`,
    template: `<app-component-under-test [input]="input"></app-component-under-test>`
  })
  class TestHostComponent {
    private input = '';

    setInput(newInput: string) {
      this.input = newInput;
    }
  }

  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentUnderTestComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should show TEST INPUT', () => {
    testHostComponent.setInput('test input');
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('div').innerText).toEqual('TEST INPUT');
  });

  it('should show DIFFERENT TEST INPUT', () => {
    testHostComponent.setInput('different test input');
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('div').innerText).toEqual('DIFFERENT TEST INPUT');
  });
});
