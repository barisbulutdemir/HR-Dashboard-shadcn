import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { projectsDemo } from '../data/projectsDemo'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function Projects() {
  return (
    <>
        <div className=' mx-5 mt-5'>
            <ScrollArea className='h-[575px]' >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            {
                projectsDemo.map((project) => (

                    <Card key={project.projectid} className='shadow-xl'>
                    <CardHeader>
                        <CardTitle className='text-xl flex justify-between'>

                            {project.projectName}   
                            <Label className='opacity-50'>{project.projectCountry}</Label>
                            
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className='flex space-x-10'>
                        <div className='w-[50%] '>
                            <div>
                                <Label className='opacity-40'> Site Manager: </Label>
                                <Label>{ project.projectManager }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Team Manager: </Label>
                                <Label>{ project.projectInterTeam }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Admin: </Label>
                                <Label>{ project.projectAdmin }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Foremen: </Label>
                                <Label>{ project.projectForemen }</Label>
                            </div>

                            <Button variant="secondary" className='mt-5'> View</Button>
                           
                        </div>
                    
                        <div>
                             <div>
                                <Label className='opacity-40'> Electrician: </Label>
                                <Label>{ project.projectElectrician }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Elec. Helper: </Label>
                                <Label>{ project.projectElectricianHelper }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Mechanical: </Label>
                                <Label>{ project.projectMechanic }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Mec. Helper: </Label>
                                <Label>{ project.projectMechanicHelper }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Foremen: </Label>
                                <Label>{ project.projectForemens }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Admin: </Label>
                                <Label>{ project.projectAdmins }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Ramming: </Label>
                                <Label>{ project.projectRammingOperator }</Label>
                            </div>
                            <div>
                                <Label className='opacity-40'> Telehandler: </Label>
                                <Label>{ project.projectTelehandlerOperator }</Label>
                            </div>
                            <div>
                                Total: <Label>
                                    {project.projectAdmins + project.projectForemens + project.projectMechanic + project.projectElectrician +
                                    project.projectElectricianHelper + project.projectRammingOperator + project.projectTelehandlerOperator}
                                </Label>
                            </div>


                            
                        </div>
                    </div>
                        
                    </CardContent>
                    
                </Card>

                ))
            }
            </div>
            </ScrollArea>

           
            

        </div>
    </>
  )
}
