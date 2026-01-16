
// Email service for handling booking confirmations
// This is a mock service - in a real app, you would connect to a backend API

interface BookingData {
  [key: string]: any;
  recipientEmail?: string;
}

export const sendBookingConfirmation = (bookingData: BookingData): boolean => {
  try {
    // Log the data that would be sent in a real implementation
    console.log("Sending booking confirmation with data:", bookingData);
    
    // The service provider's WhatsApp number for direct contact
    const serviceProviderWhatsApp = "9550464957";
    const recipientEmail = bookingData.email || bookingData.recipientEmail || "megtk21@gmail.com";
    
    // For demo purposes, here we would be making an API call to send the email
    // Since this is a mock implementation, we'll log what would happen
    console.log(`Email notification sent to customer at: ${recipientEmail}`);
    console.log(`WhatsApp message will be sent to service provider at: ${serviceProviderWhatsApp}`);
    
    // Generate email content based on booking type
    let specificDetails = '';
    
    switch(bookingData.serviceCategory) {
      case 'personal':
        specificDetails = `
🚗 Vehicle: ${bookingData.vehicleType || 'N/A'}
📍 Address: ${bookingData.address || 'N/A'}, ${bookingData.city || 'N/A'}`;
        break;
      case 'event':
        specificDetails = `
🎉 Event: ${bookingData.eventType || 'N/A'}
👥 Guests: ${bookingData.guestCount || 'N/A'}
🏢 Venue: ${bookingData.venue || 'N/A'}
📍 Address: ${bookingData.venueAddress || 'N/A'}, ${bookingData.city || 'N/A'}
🚗 Estimated cars: ${bookingData.estimatedCars || 'N/A'}`;
        break;
      case 'commercial':
        specificDetails = `
🏢 Establishment: ${bookingData.establishmentName || 'N/A'} (${bookingData.establishmentType || 'N/A'})
📍 City: ${bookingData.city || 'N/A'}
⏱️ Frequency: ${bookingData.serviceFrequency || 'N/A'}
👨‍💼 Contact: ${bookingData.contactPerson || 'N/A'}
🚗 Volume: ${bookingData.expectedVolume || 'N/A'} cars/day`;
        break;
      default:
        specificDetails = `
🔸 Service Type: ${bookingData.serviceType || 'N/A'}
📝 Additional Notes: ${bookingData.specialInstructions || 'None'}`;
    }
    
    // Prepare message content for WhatsApp to service provider
    const serviceProviderMessage = `
🔹 NEW BOOKING REQUEST 🔹

👤 CUSTOMER DETAILS:
Name: ${bookingData.name || 'N/A'}
Phone: ${bookingData.phone || 'N/A'}
Email: ${bookingData.email || 'N/A'}

🔸 SERVICE DETAILS:
Category: ${bookingData.serviceCategory || 'N/A'}
Service: ${bookingData.serviceType || 'N/A'}
Date: ${bookingData.dateString || 'N/A'}
Time: ${bookingData.time || 'N/A'}
Duration: ${bookingData.duration || 'N/A'} hours
Valets needed: ${bookingData.numDrivers || 'N/A'}
Total Price: ${bookingData.totalPrice || 'N/A'}

${specificDetails}

${bookingData.specialInstructions ? `📝 Special Instructions: ${bookingData.specialInstructions}` : ''}

💬 Please contact the customer directly to confirm this booking.

Royal Valet Services Platform
    `;

    // Customer confirmation message
    const customerMessage = `
✅ BOOKING REQUEST SUBMITTED

Dear ${bookingData.name || 'Customer'},

Your valet service booking has been submitted successfully!

📋 BOOKING SUMMARY:
Service: ${bookingData.serviceType || 'N/A'}
Date: ${bookingData.dateString || 'N/A'}
Time: ${bookingData.time || 'N/A'}
Duration: ${bookingData.duration || 'N/A'} hours
Total: ${bookingData.totalPrice || 'N/A'}

${specificDetails}

📞 NEXT STEPS:
The service provider will contact you directly within 1-2 hours to confirm your booking details and finalize arrangements.

Service Provider Contact: ${serviceProviderWhatsApp}

Thank you for choosing Royal Valet Services!
    `;
    
    // Always send to service provider's WhatsApp for booking notifications (use wa.me directly)
    const serviceProviderWhatsappMessage = encodeURIComponent(serviceProviderMessage);
    const serviceProviderWhatsappLink = `https://wa.me/${serviceProviderWhatsApp}?text=${serviceProviderWhatsappMessage}`;
    
    // Send customer confirmation based on selected method
    if (bookingData.contactMethod === 'email') {
      // Prepare mailto link for customer email
      const mailtoLink = `mailto:${recipientEmail}?subject=Booking Confirmation - ${bookingData.serviceType}&body=${encodeURIComponent(customerMessage)}`;
      console.log("Opening customer email:", mailtoLink);
      // Note: In real implementation, this would be handled by backend
    } else if (bookingData.contactMethod === 'whatsapp') {
      // Send WhatsApp to customer (use wa.me directly)
      const customerWhatsappMessage = encodeURIComponent(customerMessage);
      const customerPhone = (bookingData.phone || '').replace(/[^0-9]/g, '');
      const customerWhatsappLink = `https://wa.me/${customerPhone}?text=${customerWhatsappMessage}`;
      console.log("Customer WhatsApp link:", customerWhatsappLink);
    }
    
    // Always notify service provider via WhatsApp
    console.log("Opening service provider WhatsApp:", serviceProviderWhatsappLink);
    window.open(serviceProviderWhatsappLink, '_blank');
    
    return true; // Simulate successful message
  } catch (error) {
    console.error("Error sending booking confirmation:", error);
    return false;
  }
};

// Function to send contact form messages - also goes to service provider
export const sendContactMessage = (contactData: { 
  name: string;
  email: string;
  phone: string;
  message: string;
}): boolean => {
  try {
    console.log("Sending contact form data:", contactData);
    
    const serviceProviderWhatsApp = "9550464957";
    
    // Prepare WhatsApp message for contact form
    const messageContent = `
📨 NEW CONTACT MESSAGE

👤 ${contactData.name}
📱 ${contactData.phone}
📧 ${contactData.email}

💬 Message:
${contactData.message}

From Royal Valet Website - Please respond directly to customer
    `;
    
    const whatsappMessage = encodeURIComponent(messageContent);
    const whatsappLink = `https://wa.me/${serviceProviderWhatsApp}?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
    
    return true;
  } catch (error) {
    console.error("Error sending contact message:", error);
    return false;
  }
};
