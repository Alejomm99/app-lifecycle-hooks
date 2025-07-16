import {
  afterNextRender,
  afterRender,
  Component,
  effect,
  OnChanges,
  OnInit,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #e05551ff'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {
  traditionalProperty = 'Alejandro';
  signalProperty = signal('Alejandro');

  constructor() {
    log('Constructor llamado');
  }

  changeTraditional() {
    this.traditionalProperty = 'Alejandro Mesa';
  }

  changeSignal() {
    this.signalProperty.set('Alejandro Mesa');
  }

  basicEffect = effect((onCleanup) => {
    log('effect', 'Disparar efectos secundarios');

    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir');
    });
  });

  ngOnInit() {
    log(
      'ngOnInit',
      '	Se ejecuta una vez después de que Angular ha inicializado todas las entradas del componente.'
    );
  }

  ngOnChanges() {
    log(
      'ngOnChanges',
      '	Se ejecuta cada vez que las entradas del componente han cambiado.'
    );
  }

  ngDoCheck() {
    log(
      'ngDoCheck',
      '	Se ejecuta cada vez que este componente es verificado por cambios.'
    );
  }

  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      '	Se ejecuta una vez después de que el contenido del componente ha sido inicializado.'
    );
  }

  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      '	Se ejecuta una vez después de que la vista del componente ha sido inicializada.'
    );
  }

  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      '	Se ejecuta cada vez que la vista del componente ha sido verificada por cambios.'
    );
  }

  ngOnDestroy() {
    log(
      'ngOnDestroy',
      '	Se ejecuta una vez antes de que el componente sea destruido.'
    );
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      '	Se ejecuta una vez la próxima vez que todos los componentes hayan sido renderizados en el DOM.'
    );
  });

  afterRender = afterRender(() => {
    log(
      'afterRender',
      '		Se ejecuta cada vez que todos los componentes han sido renderizados en el DOM.'
    );
  });
}
