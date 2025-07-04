import dayjs from "dayjs";

export function transformDashboardData(dashboardData) {
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
