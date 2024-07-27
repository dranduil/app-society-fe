import Header from "@/components/header";
import Main from "@/components/main";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Label } from "@/components/ui/label";
import { AppThunkDispatch, useAppSelector } from '@/store';
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeImageProfile } from "@/store/profile/profileSlice";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProfilePage() {
  const profile = useAppSelector((state) => state.profile);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [profileForm, setProfileForm] = useState({
    name: profile.name || '',
    surname: profile.surname || '',
    biography: profile.biography || '',
    link: profile.link || '',
    username: profile.username || '',
    gender: profile.gender || '',
    nationality: profile.nationality || '',
  });
  const dispatch = useDispatch<AppThunkDispatch>();

  const handleChangeImageProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (profileImage) {
        dispatch(changeImageProfile({ image_stream: profileImage }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result
          ? (reader.result as string).split(',')[1]
          : '';
        setProfileImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm({ ...profileForm, [name]: value });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setProfileForm({ ...profileForm, [name]: value });
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Main>
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
            <Link to="#avatar">Avatar</Link>
            <Link to="#personal-information">Personal Information</Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1" id="avatar">
              <CardHeader>
                <CardTitle>Image Profile</CardTitle>
                <CardDescription>
                  Used to identify your store in the marketplace.
                </CardDescription>
                {!profile.imageUrl ? (
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                      Drop image Here
                    </ContextMenuTrigger>
                  </ContextMenu>
                ) : (
                  <AspectRatio ratio={3}>
                    <img
                      src={profile.imageUrl as string}
                      alt={profile.username as string}
                      width={200}
                      height={200}
                      className="rounded-full object-cover"
                    />
                  </AspectRatio>
                )}
              </CardHeader>
              <form onSubmit={handleChangeImageProfile}>
                <CardContent>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input
                      id="picture"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button type="submit">Save</Button>
                </CardFooter>
              </form>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1" id="personal-information">
              <CardHeader>
                <CardTitle>Personal information</CardTitle>
                <CardDescription>
                  Edit your personal information here
                </CardDescription>
              </CardHeader>
              <form>
                <CardContent>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" name="name" onChange={handleInputChange} value={profileForm.name} />
                </CardContent>
                <CardContent>
                  <Label htmlFor="surname">Surname</Label>
                  <Input type="text" name="surname" onChange={handleInputChange} value={profileForm.surname} />
                </CardContent>
                <CardContent>
                  <Label htmlFor="biography">Biography</Label>
                  <Input type="text" name="biography" onChange={handleInputChange} value={profileForm.biography} />
                </CardContent>
                <CardContent>
                  <Label htmlFor="link">Link</Label>
                  <Input type="text" name="link" onChange={handleInputChange} value={profileForm.link} />
                </CardContent>
                <CardContent>
                  <Label htmlFor="username">Username</Label>
                  <Input type="text" name="username" onChange={handleInputChange} value={profileForm.username} />
                </CardContent>
                <CardContent>
                  <Label>Gender</Label>
                  <Select onValueChange={handleSelectChange('gender')}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select your Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </CardContent>
                <CardContent>
                  <Label>Nationality</Label>
                  <Select onValueChange={handleSelectChange('nationality')}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Nationality</SelectLabel>
                        <SelectItem value="american">American</SelectItem>
                        <SelectItem value="british">British</SelectItem>
                        <SelectItem value="canadian">Canadian</SelectItem>
                        <SelectItem value="australian">Australian</SelectItem>
                        {/* Add other nationalities here */}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button type="submit">Save</Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </Main>
    </div>
  );
}
