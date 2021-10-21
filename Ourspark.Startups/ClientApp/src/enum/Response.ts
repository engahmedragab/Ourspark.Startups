export enum ResponseStatus {
    None = -1,
    Success = 0,
    Error = 1,
    Warning = 2
  }
  
  export enum ResponseSubStatus {
    NotUnique = 0,
    Added = 1,
    Updated = 2,
    Read = 3,
    Delete = 4,
    LevelConfigrationNotRelatedToSelectedStrategy = 5,
    KPIImportInProgress = 6,
    ServerError = 7,
    FilesNotFound = 8,
    FileNotValid = 9,
    FileNameExist = 10,
    CodeNotUnique = 11
  }