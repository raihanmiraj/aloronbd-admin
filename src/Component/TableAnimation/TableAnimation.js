import React, { Component } from 'react'

export class TableAnimation extends Component {
    render() {

        var tabledata =  <tr>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <div class="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium h-10 w-80 bg-gray-200">
              
              </div>
              <div class="text-sm text-gray-500">
                 </div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap ">
        <div class="flex items-center">
            <div class="flex-shrink-0 h-10  w-80">
              <div class="h-10     bg-gray-200 animate-pulse"></div>
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">
             
              </div>
              <div class="text-sm text-gray-500">
               
              </div>
            </div>
          </div> 
        </td>
      </tr>;
        return (
            
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-5">
      <table id="example" class="display nowrap" style={{ width: '100%' }} class="min-w-full divide-y divide-gray-200  ">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 bg-gray-200 uppercase tracking-wider animate-pulse">
            
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 bg-gray-200 uppercase tracking-wider animate-pulse">
              
            </th>
            
          
          
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        
{tabledata}
{tabledata}
{tabledata}
{tabledata}
{tabledata}
 
 
 



      

         
        </tbody>
      </table>
    </div>
        )
    }
}

export default TableAnimation
