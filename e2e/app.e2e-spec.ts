import { RentHotelPage } from './app.po';

describe('rent-hotel App', function() {
  let page: RentHotelPage;

  beforeEach(() => {
    page = new RentHotelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
