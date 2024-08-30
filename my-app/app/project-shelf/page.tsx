"use client"

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Search, Download } from 'lucide-react'
import Image from 'next/image'

// Dummy data - replace this with your JSON file later
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
        { id: 5, title: "Edge AI for IoT Devices", description: "Implementing AI algorithms on edge devices for real-time processing", students: "Ivy Chen, Jack Thompson", supervisor: "Dr. Lisa Gray", tags: ["AI", "IoT", "Edge Computing"] },
        { id: 6, title: "Natural Language Processing for Regional Languages", description: "Developing NLP models for Indian regional languages", students: "Kate Patel, Liam O'Connor", supervisor: "Prof. Daniel Green", tags: ["NLP", "Machine Learning", "Linguistics"] },
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
        // Implement CSV download functionality here
        console.log("Downloading CSV...");
    };

    return (
        <div className="bg-white">
            <div className="bg-orange-500 text-white p-8 mb-6 flex justify-between ">
                <div className='bg-white rounded p-5'>
                    <Image
                        src="/header.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </div>
                <div className="flex flex-col font-sans justify-center items-center">
                    <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl ml-5 ">
                        Computer Science and Engineering Projects
                    </h1>
                </div>


            </div>

            <div className="container mx-auto p-4">
                <Card className="mb-6 border-orange-500 border-t-4">
                    <CardHeader>
                        <CardTitle className="text-orange-500">Project Showcase</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Explore innovative projects from our talented Computer Science and Engineering students.</p>
                    </CardContent>
                </Card>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
                            <SelectTrigger className="w-[180px] border-orange-500">
                                <SelectValue placeholder="Select Year" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.keys(projectsData).map((year) => (
                                    <SelectItem key={year} value={year}>{year}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-orange-500" />
                            <Input
                                placeholder="Search projects..."
                                className="pl-8 border-orange-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600">
                        <Download className="mr-2 h-4 w-4" /> Download CSV
                    </Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow className="bg-orange-100">
                            <TableHead className="text-orange-700">Title</TableHead>
                            <TableHead className="text-orange-700">Description</TableHead>
                            <TableHead className="text-orange-700">Students</TableHead>
                            <TableHead className="text-orange-700">Supervisor</TableHead>
                            <TableHead className="text-orange-700">Tags</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProjects.map((project) => (
                            <TableRow key={project.id} className="hover:bg-orange-50">
                                <TableCell className="font-medium text-orange-700">{project.title}</TableCell>
                                <TableCell>{project.description}</TableCell>
                                <TableCell>{project.students}</TableCell>
                                <TableCell>{project.supervisor}</TableCell>
                                <TableCell>{project.tags.map(tag => (
                                    <span key={tag} className="inline-block bg-orange-200 text-orange-700 rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1">{tag}</span>
                                ))}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ProjectShelf;