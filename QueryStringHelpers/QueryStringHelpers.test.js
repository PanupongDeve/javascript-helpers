import moment from 'moment';
import queryStringHelpers from '../QueryStringHelpers';

describe('testing query string helpers', () => {

    describe('testing setDefaultQuery function', () => {
        test('input https://localhost:3000 should be https://localhost:3000?dest_id=12&country_id=7&date_start=YYYY-MM-DD&date_end=YYYY-MM-DD', () => {
            const deteNow =  moment().format('YYYY-MM-DD');
            const nextDate = moment(deteNow).add(7, 'd').format("YYYY-MM-DD");
            const result = queryStringHelpers.setDefaultQuery('https://localhost:3000');
            expect(result).toEqual(`https://localhost:3000?dest_id=12&country_id=7&date_start=${deteNow}&date_end=${nextDate}`);
        })
    });

    describe('testing setOnlyQueryString function', () => {
        test('when call function should be dest_id=12&country_id=7&date_start=YYYY-MM-DD&date_end=YYYY-MM-DD', () => {
            const deteNow =  moment().format('YYYY-MM-DD');
            const nextDate = moment(deteNow).add(7, 'd').format("YYYY-MM-DD");
            const result = queryStringHelpers.setOnlyQuerySring();
            expect(result).toEqual(`dest_id=12&country_id=7&date_start=${deteNow}&date_end=${nextDate}`);
        });
    });

    describe('testing destination query string', () => {
        test('test getDestination function', () => {
            global.window = Object.create(window);
            const url = "http://dummy.com?dest_id=12";
            Object.defineProperty(window, 'location', {
            value: {
                href: url
            }
            });
            const result = queryStringHelpers.destination.getDestination();
            expect(result).toEqual('12');  
        });

        test('test addDestination function', () => {
            const url = "http://dummy.com";
            const urlExpected = "http://dummy.com?dest_id=999";
            const result = queryStringHelpers.destination.addDestination(url, 999)
            expect(result).toEqual(urlExpected);  
        });

        test('test addDestination 2 function', () => {
            const url = "http://dummy.com?xxxx=12";
            const urlExpected = "http://dummy.com?xxxx=12&dest_id=999";
            const result = queryStringHelpers.destination.addDestination(url, 999)
            expect(result).toEqual(urlExpected);  
        });

        test('test setDestination function', () => {
            const url = "http://dummy.com?dest_id=12";
            const urlExpected = "http://dummy.com?dest_id=999";
            const result = queryStringHelpers.destination.setDestination(url, 999)
            expect(result).toEqual(urlExpected);  
        });

        test('test setDestination 2 function', () => {
            const url = "http://dummy.com?xxx=12&dest_id=12";
            const urlExpected = "http://dummy.com?xxx=12&dest_id=999";
            const result = queryStringHelpers.destination.setDestination(url, 999)
            expect(result).toEqual(urlExpected);  
        });
    })
});