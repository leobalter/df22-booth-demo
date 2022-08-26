import { LightningElement, api } from "lwc";
const columns = [
  { label: "File Name", fieldName: "FileName" },
  { label: "Metadata Type", fieldName: "MetadataType" },
  { label: "Operation", fieldName: "Operation" },
  { label: "Last Modified By", fieldName: "LastModifiedBy" },
  { label: "Last Modified Date", fieldName: "LastModifiedDate", type: "date" }
];

export default class WorkItemChangedTable extends LightningElement {
  @api workItemNumber;

  columns = columns;
  get data() {
    let today = Date.now();
    let data = [
      {
        FileName: "workItemTracker",
        MetadataType: "LightningComponentBundle",
        Operation: "Add",
        LastModifiedBy: "Greg Whitworth",
        LastModifiedDate: today
      },
      {
        FileName: "WorkItem__c-ContributorStatus__c",
        MetadataType: "CustomField",
        Operation: "Add",
        LastModifiedBy: "James Tu",
        LastModifiedDate: today
      },
      {
        FileName: "DevOpsCenter",
        MetadataType: "PermissionSet",
        Operation: "Change",
        LastModifiedBy: "Nolan Lawson",
        LastModifiedDate: today
      },
      {
        FileName: "WorkItem__c-Contributor Layout",
        MetadataType: "Layout",
        Operation: "Change",
        LastModifiedBy: "Greg Whitworth",
        LastModifiedDate: today
      }
    ];
    return data;
  }
}