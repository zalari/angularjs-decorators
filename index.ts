export declare namespace ngxt {

  interface IComponentOptions extends ng.IComponentOptions {
    /**
     * this is a convenient field, to actually name "directive" components and allow for easier
     * hookup with angular.module().component registration
     */
    selector?: string;
  }

}

export const LegacyComponent = function (options: ngxt.IComponentOptions):Function {
  return (controller: Function) => {
    return angular.extend(options, {controller});
  };
};

//mimic Angular 2 decorators

export const Injectable = function () {
  //... we do nothing!
};

