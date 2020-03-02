import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let storageSpy;
  beforeEach(() => {
    storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);
    TestBed.configureTestingModule({
      providers: [
        { provide: Storage, useValue: storageSpy },
      ],
    });
  });

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
