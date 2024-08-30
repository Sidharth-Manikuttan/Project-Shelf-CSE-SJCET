"use client"

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Search, Download } from 'lucide-react'
import Image from 'next/image'

const projectsData = {
    "2022": [
        { id: 1, title: "AI-powered Campus Navigation System", description: "A mobile app using AI and AR for effortless campus navigation", students: "Alice Johnson, Bob Smith", supervisor: "Dr. Emily Brown", tags: ["AI", "AR", "Mobile App"] },
        { id: 2, title: "Blockchain-based Academic Credential Verification", description: "Secure and transparent system for verifying academic credentials", students: "Charlie Davis, David Wilson", supervisor: "Prof. Michael Green", tags: ["Blockchain", "Security", "Web Development"] },
    ],
    "2023": [
        { id: 3, title: "AI-Enhanced Learning Management System", description: "Personalized learning platform with AI-driven content recommendations", students: "Eve Taylor, Frank Anderson", supervisor: "Dr. Sarah White", tags: ["AI", "Education Tech", "Web Development"] },
        { id: 4, title: "Quantum-Resistant Cryptography Implementation", description: "Developing and implementing post-quantum cryptographic algorithms", students: "Grace Lee, Henry Martinez", supervisor: "Prof. Robert Black", tags: ["Cryptography", "Quantum Computing", "Security"] },
    ],
    "2024": [
        { id: 5, title: "Currently", description: "A Household electricty consumption monitoring solution", students: "Kiran Babu,Indrajith S Nair,Sidharth Manikuttan,Anit Thomas", supervisor: "Prof. Jikku Thomas", tags: ["IoT", "App Development", "FireBase", "React Native"] },
        { id: 6, title: "EduNet", description: "Professional Networking and Event Engagement App for Students and Alumni", students: "Kennith Joseph, Amiya Hidayathulla,Melby Mariam Chandy,Akshay CA", supervisor: "Prof. Smitha Jacob", tags: ["Flutter", "App Development", "REST API"] },
    ],
};

const ProjectShelf = () => {
    const [selectedYear, setSelectedYear] = useState<string>("2024");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredProjects, setFilteredProjects] = useState(projectsData[2024]);

    useEffect(() => {
        const filtered = projectsData[selectedYear as keyof typeof projectsData].filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.students.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredProjects(filtered);
    }, [selectedYear, searchTerm]);

    const handleDownload = () => {

        console.log("Downloading CSV...");
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sm:p-8 mb-6">

                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                    <div className='bg-white rounded p-5 sm:p-5 mb-4 sm:mb-0'>
                        <Image
                            src="/header.png"
                            width={400}
                            height={400}
                            alt="College logo"
                            className="max-w-[180px] sm:max-w-[200px] h-auto"
                        />
                    </div>
                    <div className="flex flex-col font-sans text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                            Computer Science and Engineering Projects
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-light italic">
                            Innovating for Tomorrow, Coding for the Future
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <Card className="mb-6 border-orange-500 border-t-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="text-orange-500 scroll-m-20 text-2xl font-semibold tracking-tight">Project Showcase</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">Explore innovative projects from our talented Computer Science and Engineering students, pushing the boundaries of technology and creativity.</p>
                    </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                        <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
                            <SelectTrigger className="w-full sm:w-[180px] border-orange-500">
                                <SelectValue placeholder="Select Year" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.keys(projectsData).map((year) => (
                                    <SelectItem key={year} value={year}>{year}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div className="relative w-full sm:w-auto">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-orange-500" />
                            <Input
                                placeholder="Search projects..."
                                className="pl-8 border-orange-500 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" /> Download CSV
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-orange-100">
                                <TableHead className="text-orange-700">Title</TableHead>
                                <TableHead className="text-orange-700 hidden sm:table-cell">Description</TableHead>
                                <TableHead className="text-orange-700">Students</TableHead>
                                <TableHead className="text-orange-700 hidden md:table-cell">Supervisor</TableHead>
                                <TableHead className="text-orange-700">Tags</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredProjects.map((project) => (
                                <TableRow key={project.id} className="hover:bg-orange-50 transition-colors duration-200">
                                    <TableCell className="font-medium text-orange-700">{project.title}</TableCell>
                                    <TableCell className="hidden sm:table-cell">{project.description}</TableCell>
                                    <TableCell>{project.students}</TableCell>
                                    <TableCell className="hidden md:table-cell">{project.supervisor}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="inline-block bg-orange-200 text-orange-700 rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1 transition-transform duration-200 hover:scale-105">{tag}</span>
                                            ))}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ProjectShelf;