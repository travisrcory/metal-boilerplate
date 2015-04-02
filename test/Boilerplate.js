import async from '../bower_components/metal/src/async/async';
import dom from '../bower_components/metal/src/dom/dom';
import Boilerplate from '../src/Boilerplate';

var component;

describe('Boilerplate', function() {
  afterEach(function() {
    if (component) {
      component.dispose();
    }
  });

  it('should render component', function() {
    component = new Boilerplate().render();
    assert.ok(component.element.parentNode);
  });

  it('should change visibility when visible attribute changes', function(done) {
    component = new Boilerplate().render();
    component.visible = false;
    async.nextTick(function() {
      assert.ok(!component.visible);
      done();
    });
  });

  it('should change visibility when close icon is clicked', function(done) {
    component = new Boilerplate().render();
    dom.triggerEvent(component.element.querySelector('.close'), 'click');
    async.nextTick(function() {
      assert.ok(!component.visible);
      done();
    });
  });

  it('should decorate component', function() {
    var attributes = {
      element: '#component',
      id: 'component',
      headerContent: 'header',
      bodyContent: 'body',
      footerContent: 'footer'
    };

    var templateFn = soy.$$getDelegateFn('Boilerplate');
    var markupFromTemplate = templateFn(attributes, null, { renderChildComponents: true });
    dom.append(document.body, markupFromTemplate.content);

    component = new Boilerplate(attributes).decorate();

    assert.strictEqual(
      component.element.outerHTML,
      document.getElementById('component').outerHTML
    );
  });
});
