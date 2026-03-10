import { newSpecPage } from '@stencil/core/testing';
import { VAmbulanceWlApp } from '../v-ambulance-wl-app';

describe('v-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [VAmbulanceWlApp],
      html: `<v-ambulance-wl-app base-path="/"></v-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("v-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [VAmbulanceWlApp],
      html: `<v-ambulance-wl-app base-path="/ambulance-wl/"></v-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("v-ambulance-wl-list");
  });
});
