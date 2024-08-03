import Header from "@/components/header";
import Main from "@/components/main";
import { Link, useLocation } from "react-router-dom";
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
import { Label } from "@/components/ui/label";
import { AppThunkDispatch, useAppSelector } from '@/store';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeImageProfile, updateProfileUser } from "@/store/profile/profileSlice";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { getNationalities } from "@/store/nationatilies/nationalitySlice";
import { getGenders } from "@/store/genders/genderSlice";

export default function ProfilePage() {
  const profile = useAppSelector((state) => state.profile);
  const nationalState = useAppSelector((state) => state.nationalities)
  const genderState = useAppSelector((state) => state.genders)

  
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [profileForm, setProfileForm] = useState({
    id: profile.id || undefined,
    name: profile.name || '',
    surname: profile.surname || '',
    biography: profile.biography || '',
    link: profile.link || '',
    username: profile.username || '',
    genderId: profile.genderId || null,
    nationalityId: profile.nationalityId || null,
    gender: profile.gender || {},
    nationality: profile.nationality || {},
  });

  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(getNationalities())
    dispatch(getGenders())
  }, [dispatch])

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

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    if(profileForm) {
      const payload = {
        biography: profileForm.biography,
        link: profileForm.link,
        username: profileForm.username,
        nationality_id: profileForm.nationalityId,
        gender_id: profileForm.genderId,
        name: profileForm.name,
        surname: profileForm.surname
      }
      console.log(payload)
      dispatch(updateProfileUser(payload))
    }

  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm({ ...profileForm, [name]: value });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    console.table(profileForm)
    console.log(name)
    console.log(value)
    setProfileForm({ ...profileForm, [name]: value });
  };

  const {hash, key} = useLocation()
    useEffect(()=>{
      if(hash){
        const targetElement = document.getElementById(hash.substring(1))
          targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [key, hash])

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Main>
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
            <Link to={{hash:'#avatar'}}>Avatar</Link>
            <Link to={{hash:'#personal-information'}}>Personal Information</Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1" id="avatar">
              <CardHeader>
                <CardTitle>Change Image Profile</CardTitle>
                <CardDescription>
                  Choose your image profile or your personal avtar, upload it from your files
                </CardDescription>
                {!profile.imageUrl ? (
                  <Skeleton className="h-[100px] w-[100px] "></Skeleton>
                ) : (
                  
                  <Avatar>
                    <AvatarImage src={profile.imageUrl} alt={profile.username ?? ''} />
                    <AvatarFallback>{profile.name}</AvatarFallback>
                  </Avatar>
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
            <Card x-chunk="dashboard-04-chunk-2" id="personal-information">
              <CardHeader>
                <CardTitle>Personal information</CardTitle>
                <CardDescription>
                  Edit your personal information here
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmitForm}>
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
                  {
                    genderState.isLoading ? <Skeleton className="rounded-md w-[180px] h-[40px]"></Skeleton> :
                    <Select defaultValue={profile.genderId?.toString()} onValueChange={handleSelectChange('genderId')}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select your Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {
                            genderState.genders.map((gender) => {
                                return (
                                  <SelectItem key={`${gender?.name}-${gender?.id}`} value={gender?.id ? gender?.id.toString() : ''}>{gender?.name}</SelectItem>
                                )
                            })
                          }
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  }
                </CardContent>
                <CardContent>
                  <Label>Nationality</Label>
                  {
                    nationalState.isLoading ?
                    <Skeleton className="rounded-md w-[180px] h-[40px]"></Skeleton>
                    :
                      <Select defaultValue={profile.nationalityId?.toString()} onValueChange={handleSelectChange('nationalityId')}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Nationality</SelectLabel>
                            {
                              nationalState.nationalities.map((nationality) => {
                                  return (
                                    <SelectItem key={`${nationality?.name}-${nationality?.id}`} value={nationality?.id ? nationality?.id.toString() : ''}>{nationality?.flagEmoji} - {nationality?.code} -{nationality?.name}</SelectItem>
                                  )
                              })
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                  }
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
