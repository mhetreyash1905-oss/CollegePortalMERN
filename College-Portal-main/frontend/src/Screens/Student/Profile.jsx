import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { FiCamera } from "react-icons/fi";
import CustomButton from "../../components/CustomButton";
import UpdatePasswordLoggedIn from "../../components/UpdatePasswordLoggedIn";
import axiosWrapper from "../../utils/AxiosWrapper";

const Profile = ({ profileData, onProfileUpdate }) => {
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  if (!profileData) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please select a valid image file (JPG, PNG, or GIF)");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5MB");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      toast.loading("Updating profile photo...");
      const response = await axiosWrapper.patch("/student/update-my-photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.dismiss();
        toast.success("Profile photo updated!");
        if (onProfileUpdate) {
          onProfileUpdate(response.data.data);
        }
      } else {
        toast.dismiss();
        toast.error(response.data.message || "Failed to update photo");
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.response?.data?.message || "Error updating photo");
    } finally {
      setIsUploading(false);
      // Reset the file input so the same file can be selected again
      e.target.value = "";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header Section */}
      <div className="flex items-center gap-8 mb-12 border-b border-gray-200 dark:border-dark-700 pb-8 justify-between">
        <div className="flex items-center gap-8">
          {/* Profile Photo with Upload Overlay */}
          <div className="relative group cursor-pointer" onClick={handlePhotoClick}>
            <img
              src={`${process.env.REACT_APP_MEDIA_LINK}/${profileData.profile}`}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover ring-4 ring-primary-400 ring-offset-4 ring-offset-white dark:ring-offset-dark-900 transition-all duration-300 group-hover:ring-primary-300"
            />
            {/* Camera overlay */}
            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                {isUploading ? (
                  <div className="w-10 h-10 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                    <FiCamera className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
            </div>
            {/* Small camera badge always visible */}
            <div className="absolute bottom-1 right-1 bg-primary-600 rounded-full p-2 shadow-lg border-2 border-white dark:border-dark-900 transition-transform duration-300 group-hover:scale-110">
              <FiCamera className="w-3.5 h-3.5 text-white" />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/gif"
              className="hidden"
              onChange={handlePhotoChange}
              disabled={isUploading}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {`${profileData.firstName} ${profileData.middleName} ${profileData.lastName}`}
            </h1>
            <p className="text-lg text-gray-600 mb-1">
              {profileData.enrollmentNo}
            </p>
            <p className="text-lg text-blue-600 font-medium">
              {profileData.branchId.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 justify-end">
          <CustomButton
            onClick={() => setShowPasswordUpdate(!showPasswordUpdate)}
            variant="primary"
          >
            {showPasswordUpdate ? "Hide" : "Update Password"}
          </CustomButton>
        </div>
        {showPasswordUpdate && (
          <UpdatePasswordLoggedIn
            onClose={() => setShowPasswordUpdate(false)}
          />
        )}
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Personal Information */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-md border border-gray-200 dark:border-dark-700 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-dark-700">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium text-slate-400">Email</label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">Phone</label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.phone}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">
                Gender
              </label>
              <p className="text-gray-900 dark:text-gray-100 capitalize">{profileData.gender}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">
                Blood Group
              </label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.bloodGroup}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">
                Date of Birth
              </label>
              <p className="text-gray-900 dark:text-gray-100">{formatDate(profileData.dob)}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">
                Semester
              </label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.semester}</p>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-md border border-gray-200 dark:border-dark-700 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-dark-700">
            Address Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium text-slate-400">
                Address
              </label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.address}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">City</label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.city}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">State</label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.state}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">
                Pincode
              </label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.pincode}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">
                Country
              </label>
              <p className="text-gray-900 dark:text-gray-100">{profileData.country}</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-md border border-gray-200 dark:border-dark-700 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-dark-700">
            Emergency Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium text-slate-400">Name</label>
              <p className="text-gray-900 dark:text-gray-100">
                {profileData.emergencyContact.name}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">
                Relationship
              </label>
              <p className="text-gray-900 dark:text-gray-100">
                {profileData.emergencyContact.relationship}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">Phone</label>
              <p className="text-gray-900 dark:text-gray-100">
                {profileData.emergencyContact.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
