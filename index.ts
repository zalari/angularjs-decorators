export const LegacyComponent = function (options:ng.IComponentOptions):Function {
  return (controller:Function) => {
    return angular.extend(options, {controller});
  };
};

//mimic Angular 2 decorators

export const Injectable = function () {
  //... we do nothing!
};

