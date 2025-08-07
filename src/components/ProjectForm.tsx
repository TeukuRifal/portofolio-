'use client';
import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

type ProjectFormProps = {
    onSuccess?: () => void;
    onCancel?: () => void;
};

export default function ProjectForm({ onSuccess, onCancel }: ProjectFormProps) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        tags: '',
        image_url: '',
        project_url: '',
        github_url: '',
        year: new Date().getFullYear(),
    });
    const [uploading, setUploading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `project-image/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('project-image')
            .upload(filePath, file);

        if (uploadError) {
            alert('Gagal upload gambar: ' + uploadError.message);
            setUploading(false);
            return;
        }

        const { data } = supabase.storage
            .from('project-image')
            .getPublicUrl(filePath);

        setForm({ ...form, image_url: data.publicUrl });
        setUploading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await supabase.from('projects').insert([{
            title: form.title,
            description: form.description,
            tags: form.tags.split(',').map(t => t.trim()),
            image_url: form.image_url,
            project_url: form.project_url,
            github_url: form.github_url,
            year: form.year,
        }]);

        if (error) {
            alert('Gagal menyimpan: ' + error.message);
        } else {
            alert('Project berhasil ditambahkan!');
            setForm({
                title: '',
                description: '',
                tags: '',
                image_url: '',
                project_url: '',
                github_url: '',
                year: new Date().getFullYear(),
            });
            onSuccess?.();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Judul"
                className="border p-2 w-full rounded"
                required
            />
            <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Deskripsi"
                className="border p-2 w-full rounded"
                required
            />
            <input
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="tag1, tag2"
                className="border p-2 w-full rounded"
            />
            <input
                name="project_url"
                value={form.project_url}
                onChange={handleChange}
                placeholder="Project URL"
                className="border p-2 w-full rounded"
            />
            <input
                name="github_url"
                value={form.github_url}
                onChange={handleChange}
                placeholder="GitHub URL"
                className="border p-2 w-full rounded"
            />
            <input
                name="year"
                type="number"
                value={form.year}
                onChange={handleChange}
                className="border p-2 w-full rounded"
            />

            {/* Upload gambar */}
            <div>
                <label className="block font-medium mb-1">Upload Gambar</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="border p-2 w-full rounded"
                />
                {uploading && <p className="text-sm text-blue-500 mt-1">Mengupload...</p>}
                {form.image_url && (
                    <img
                        src={form.image_url}
                        alt="Preview"
                        className="w-32 h-32 object-cover mt-2 rounded"
                    />
                )}
            </div>

            <div className="flex justify-end gap-2">
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Batal
                    </button>
                )}
                <button
                    type="submit"
                    disabled={uploading}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Simpan Project
                </button>
            </div>
        </form>
    );
}
