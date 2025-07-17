
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, Plus, Edit, Trash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Teacher {
  id: string;
  name: string;
  post: string;
  qualification: string;
  profilePicture?: string;
}

export const Teachers = () => {
  const { toast } = useToast();
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: '1',
      name: 'Add Your Principal',
      post: 'Principal',
      qualification: 'M.Ed., Ph.D.',
      profilePicture: undefined
    },
    {
      id: '2',
      name: 'Add Math Teacher',
      post: 'Mathematics Teacher',
      qualification: 'M.Sc. Mathematics',
      profilePicture: undefined
    },
    {
      id: '3',
      name: 'Add English Teacher',
      post: 'English Teacher',
      qualification: 'M.A. English',
      profilePicture: undefined
    },
    {
      id: '4',
      name: 'Add Science Teacher',
      post: 'Science Teacher',
      qualification: 'M.Sc. Physics',
      profilePicture: undefined
    }
  ]);

  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ name: '', post: '', qualification: '' });

  const handleEdit = (teacher: Teacher) => {
    setIsEditing(teacher.id);
    setEditForm({
      name: teacher.name,
      post: teacher.post,
      qualification: teacher.qualification
    });
  };

  const handleSave = () => {
    if (isEditing) {
      setTeachers(teachers.map(teacher => 
        teacher.id === isEditing 
          ? { ...teacher, ...editForm }
          : teacher
      ));
      setIsEditing(null);
      toast({
        title: "Teacher Updated",
        description: "Teacher information has been updated successfully."
      });
    }
  };

  const handleCancel = () => {
    setIsEditing(null);
    setEditForm({ name: '', post: '', qualification: '' });
  };

  const addNewTeacher = () => {
    const newTeacher: Teacher = {
      id: Date.now().toString(),
      name: 'New Teacher',
      post: 'Subject Teacher',
      qualification: 'Qualification',
      profilePicture: undefined
    };
    setTeachers([...teachers, newTeacher]);
    handleEdit(newTeacher);
  };

  const removeTeacher = (id: string) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
    toast({
      title: "Teacher Removed",
      description: "Teacher has been removed from the list."
    });
  };

  return (
    <section id="teachers" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Dedicated Teachers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">Meet our professional and experienced faculty members</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              {isEditing === teacher.id ? (
                <div className="space-y-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-gray-500" />
                  </div>
                  <Input
                    value={editForm.name}
                    onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                    placeholder="Teacher Name"
                    className="text-center"
                  />
                  <Input
                    value={editForm.post}
                    onChange={(e) => setEditForm({...editForm, post: e.target.value})}
                    placeholder="Position"
                    className="text-center"
                  />
                  <Input
                    value={editForm.qualification}
                    onChange={(e) => setEditForm({...editForm, qualification: e.target.value})}
                    placeholder="Qualification"
                    className="text-center"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm" className="flex-1">
                      Save
                    </Button>
                    <Button onClick={handleCancel} variant="outline" size="sm" className="flex-1">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative mb-4">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Camera className="w-12 h-12 text-gray-500" />
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-8 h-8 p-0 bg-white"
                        onClick={() => handleEdit(teacher)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{teacher.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{teacher.post}</p>
                  <p className="text-gray-600 text-sm mb-4">{teacher.qualification}</p>
                  <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(teacher)}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeTeacher(teacher.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={addNewTeacher} className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Add New Teacher
          </Button>
        </div>
      </div>
    </section>
  );
};
