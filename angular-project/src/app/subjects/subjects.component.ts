import { Component, OnInit } from '@angular/core'; 
import { SharedService } from '../services/shared.service'; 
import { CommonModule } from '@angular/common'; 
@Component({ 
  selector: 'app-subjects', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './subjects.component.html', 
  styleUrls: ['./subjects.component.scss'] 
} 
)  
export class subjectsComponent implements OnInit {  
  tables: string[] = []; 
  dataMap: any = {}; 
  constructor(private service: SharedService) {} 
  ngOnInit(): void { 
      this.service.getUsers().subscribe(data => { 
      console.log("Données reçues:", data ); 
      if (data && typeof data === "object") { 
        this.tables = Object.keys(data); 
        this.dataMap = data; 
        } else { 
          this.tables = [];  
          this.dataMap = {};   
        }  
      }  
      );  
    }  
//get columns for the table dynamically  
    getColumns(table: string): string[] { 
        return this.dataMap[table] && this.dataMap[table].length > 0  
          ? Object.keys(this.dataMap[table][0]) : []; 
    } 
 // Get the values of a row dynamically  
    getValues(row: any): any[] {  
      return Object.values(row);  
  }  
// New Methods for the Buttons 
    viewsubjects(subjects: any): void { 
    console.log('View subjects:', subjects); 
    alert(`Viewing subjects: ${JSON.stringify(subjects, null, 2)}`); 
} 
    updatesubjects(subjects: any): void { 
    console.log('Update subjects:', subjects); 
    alert(`Updating subjects: ${JSON.stringify(subjects, null, 2)}`); 
  } 
    deletesubjects(subjectsId: string): void { 
    console.log('Delete subjects ID:', subjectsId); 
    this.dataMap['subjects'] = this.dataMap['subjects'].filter((subjects: any) => subjects.id !== subjectsId); 
    alert('subjects Deleted!'); 
  } 
} 
