describe('myApp.Greet Module', function(){
    beforeEach(module('myApp.greet'));
    describe('Greet Controller', function(){

       it('Should have the name initialized with empty string', inject(function($controller){
            var dummyScope = {};

            $controller('greetController', {$scope : dummyScope});

            expect(dummyScope.name).toBe('');

        }));

        it('Should have the greetMsg initialized with empty string', inject(function($controller){
            var dummyScope = {};

            $controller('greetController', {$scope : dummyScope});

            expect(dummyScope.greetMsg).toBe('');

        }));
        it('Should populate the greetMsg when greeted', inject(function($controller){
            var dummyScope = {};

            $controller('greetController', {$scope : dummyScope});

            dummyScope.name = 'Magesh';
            dummyScope.greet();
            expect(dummyScope.greetMsg).toBe('Hi Magesh, Have a nice day!');

        }));
    });

    describe('trimText Filter', function(){
        it("Should return the original string if shorter", inject(function($filter){
           var trimTextFilter = $filter('trimText');
            var data = 'A short string';
            var result = trimTextFilter(data);
            expect(result).toBe(data);
        }));
        it("Should truncate and appnend if longer", inject(function($filter){
           var trimTextFilter = $filter('trimText');
            var data = 'This is a really loooooooooong string to test';
            var result = trimTextFilter(data,20);
            var expectedResult = data.substr(0,20) + "...";
            expect(result).toBe(expectedResult);
        }));
        it("should trim by appDefaults.trimLength if no argument passed", inject(function($filter, appDefaults){
            appDefaults.trimLength = 10;
            var trimTextFilter = $filter('trimText');
            var data = 'This is a really loooooooooong string to test';
            var result = trimTextFilter(data);
            var expectedResult = data.substr(0,10) + "...";
            expect(result).toBe(expectedResult);
        }))
    });
});
