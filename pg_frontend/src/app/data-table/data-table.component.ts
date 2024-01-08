import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { MovementDataService } from '../services/movement-data/movement-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  private gridApi!: GridApi;
  rowData: any[] = [];
  colDefs: ColDef[] = [{ field: 'company_name' },
  { field: 'origin_city' },
  { field: 'origin_latitude' },
  { field: 'origin_longitude' },
  { field: 'origin_state' },
  { field: 'destination_city' },
  { field: 'destination_latitude' },
  { field: 'destination_longitude' },
  { field: 'destination_state' },
  ];

  constructor(private movementDatatService: MovementDataService) { }

  ngOnInit() {
    this.movementDatatService.getMovementData().subscribe(response => {
      for (var res in response) {
        var data = {
          'company_name': response[res].company_name,
          'origin_city': response[res].origin_city,
          'origin_latitude': response[res].origin_latitude,
          'origin_longitude': response[res].origin_longitude,
          'origin_state': response[res].origin_state,
          'destination_city': response[res].destination_city,
          'destination_latitude': response[res].destination_latitude,
          'destination_longitude': response[res].destination_longitude,
          'destination_state': response[res].destination_state
        }
        this.rowData.push(data);
      }
    });
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onFilterTextBoxChanged() {
    this.gridApi.setGridOption(
      'quickFilterText',
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }
}
