declare namespace ngxt {

  interface IComponentOptions extends ng.IComponentOptions {
    /**
     * this is a convenient field, to actually name "directive" components and allow for easier
     * hookup with angular.module().component registration
     */
    selector?: string;
  }

}
