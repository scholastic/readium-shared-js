declare module 'readium-shared-js' {
  export var ReaderView: any;
  export var ReflowableView: any;
  export var OnePageView: any;
  export var Package: any;
  export var ViewerSettings: any;
  export var StyleCollection: any;
  export default ReaderView;

  export class PaginationChangedEventArgs {
    public paginationInfo: any;
  }
}
