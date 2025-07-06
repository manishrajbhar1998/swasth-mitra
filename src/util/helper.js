import dayjs from "dayjs";

export const transformDashboardData = (dashboardData) => {
    const {
        memberId,
        plan,
        planExpiryDate,
        familyMembersDTO = {}, // ✅ Default to empty object
        profilePic
    } = dashboardData;

    const formatDOB = (dob) => {
        try {
            return dayjs(new Date(dob)).format("YYYY-MM-DD");
        } catch {
            return "";
        }
    };

    const member = {
        name: "Primary Member",
        memberId,
        plan,
        expiry: dayjs(planExpiryDate).format("DD-MM-YYYY"),
        profilePhoto: profilePic || "https://via.placeholder.com/150",
        familyMembers: {}
    };

    if (familyMembersDTO?.spouse) {
        const { name, dob, profilePhotoUrl } = familyMembersDTO.spouse;
        member.familyMembers.spouse = {
            name,
            dob: formatDOB(dob),
            profilePhoto: profilePhotoUrl || "https://via.placeholder.com/150"
        };
    }

    if (familyMembersDTO?.father) {
        const { name, dob, profilePhotoUrl } = familyMembersDTO.father;
        member.familyMembers.father = {
            name,
            dob: formatDOB(dob),
            profilePhoto: profilePhotoUrl || "https://via.placeholder.com/150"
        };
    }

    if (familyMembersDTO?.mother) {
        const { name, dob, profilePhotoUrl } = familyMembersDTO.mother;
        member.familyMembers.mother = {
            name,
            dob: formatDOB(dob),
            profilePhoto: profilePhotoUrl || "https://via.placeholder.com/150"
        };
    }

    if (Array.isArray(familyMembersDTO?.children)) {
        familyMembersDTO.children.forEach((child, index) => {
            const { name, dob, profilePhotoUrl } = child;
            member.familyMembers[`child${index + 1}`] = {
                name,
                dob: formatDOB(dob),
                profilePhoto: profilePhotoUrl || "https://via.placeholder.com/150"
            };
        });
    }

    return [member];
}

export const convertImageToBase64 = (url) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';

        // Add a cache-busting query to avoid browser blocking
        img.src = url + (url.includes('?') ? '&' : '?') + 'cachebust=' + new Date().getTime();

        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const dataURL = canvas.toDataURL('image/png');
                resolve(dataURL);
            } catch (e) {
                console.error('Canvas error:', e);
                resolve('/fallback-profile.png'); // use fallback image
            }
        };

        img.onerror = (err) => {
            console.warn('Could not load image:', url);
            resolve('/fallback-profile.png'); // fallback image path (add to public folder)
        };
    });
};

