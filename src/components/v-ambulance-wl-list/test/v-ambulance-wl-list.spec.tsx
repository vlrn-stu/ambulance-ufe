import { newSpecPage } from '@stencil/core/testing';
import { VAmbulanceWlList } from '../v-ambulance-wl-list';

describe('v-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VAmbulanceWlList],
      html: `<v-ambulance-wl-list></v-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as VAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
